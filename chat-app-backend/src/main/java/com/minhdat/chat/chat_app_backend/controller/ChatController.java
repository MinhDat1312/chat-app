package com.minhdat.chat.chat_app_backend.controller;

import com.minhdat.chat.chat_app_backend.dto.request.MessageRequest;
import com.minhdat.chat.chat_app_backend.entity.Message;
import com.minhdat.chat.chat_app_backend.entity.Room;
import com.minhdat.chat.chat_app_backend.repository.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ChatController {
    private final RoomRepository roomRepository;

    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(
            @DestinationVariable("roomId") String roomId,
            @RequestBody MessageRequest request
    ) {
        Room room = this.roomRepository.findByRoomId(request.getRoomId());
        Message message = new Message(request.getSender(), request.getContent());
        if (room != null) {
            room.getMessages().add(message);
            this.roomRepository.save(room);
        } else {
            throw new RuntimeException("Room not found !");
        }

        return message;
    }
}
