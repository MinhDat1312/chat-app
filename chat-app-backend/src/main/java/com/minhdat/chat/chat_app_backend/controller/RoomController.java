package com.minhdat.chat.chat_app_backend.controller;

import com.minhdat.chat.chat_app_backend.entity.Message;
import com.minhdat.chat.chat_app_backend.entity.Room;
import com.minhdat.chat.chat_app_backend.repository.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {
    private final RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody String roomId) {
        if (this.roomRepository.findByRoomId(roomId) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Room already exists!");
        }

        Room room = new Room();
        room.setRoomId(roomId);
        Room savedRoom = this.roomRepository.save(room);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedRoom);
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable("roomId") String roomId) {
        Room room = this.roomRepository.findByRoomId(roomId);
        if (room == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Room not found!");
        }

        return ResponseEntity.status(HttpStatus.OK).body(room);
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(
            @PathVariable("roomId") String roomId,
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "size", defaultValue = "20", required = false) int size
    ) {
        Room room = this.roomRepository.findByRoomId(roomId);
        if (room == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        List<Message> messages = room.getMessages();
        int start = Math.max(0, messages.size() - (page + 1) * size);
        int end = Math.min(messages.size(), start + size);
        List<Message> paginatedMessages = messages.subList(start, end);

        return ResponseEntity.status(HttpStatus.OK).body(paginatedMessages);
    }
}
