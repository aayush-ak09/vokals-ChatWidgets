import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatPageComponent } from '../chat-page/chat-page';

@Component({
  selector: 'app-bubbledrop',
  standalone: true,
  imports: [CommonModule, FormsModule, ChatPageComponent],
  templateUrl: './bubbledrop.html',
  styleUrl: './bubbledrop.css'
})
export class Bubbledrop implements AfterViewChecked {
  isChatOpen = false;
  userInput = '';
  messages: { sender: 'user' | 'bot'; text: string }[] = [];

  @ViewChild('chatBody') chatBody!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ sender: 'user', text });
    this.userInput = '';

    setTimeout(() => {
      if (text.toLowerCase() === 'hi') {
        this.messages.push({ sender: 'bot', text: 'Bot response' });
      } else {
        this.messages.push({ sender: 'bot', text: 'Bot response.......' });
      }
      this.scrollToBottom();
    }, 500);
  }

  private scrollToBottom() {
    try {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop = this.chatBody.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }
}
