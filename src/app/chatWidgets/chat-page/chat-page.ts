import { AfterViewChecked, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-page.html',
  styleUrls: ['./chat-page.css']
})
export class ChatPageComponent implements AfterViewChecked{
  userInput = '';
  @Input() fullScreen = true;
  @Input() botName= 'Bot';
  @Output() toggleChatEvent = new EventEmitter<void>();
  messages: { sender: 'user' | 'bot'; text: string }[] = [];

  @ViewChild('chatBody') chatBody!: ElementRef;

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  sendMessage() {
    const text = this.userInput.trim();
    if (!text) return;

    this.messages.push({ sender: 'user', text });
    this.userInput = '';

    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: 'Bot response' });
      this.scrollToBottom();
    }, 400);
  }

  private scrollToBottom() {
    try {
      if (this.chatBody) {
        this.chatBody.nativeElement.scrollTop =
          this.chatBody.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Scroll error:', err);
    }
  }

  toggleChat(){
    this.toggleChatEvent.emit();
  }
}
