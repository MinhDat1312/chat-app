package com.minhdat.chat.chat_app_backend.repository;

import com.minhdat.chat.chat_app_backend.entity.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {
    Room findByRoomId(String roomId);
}
