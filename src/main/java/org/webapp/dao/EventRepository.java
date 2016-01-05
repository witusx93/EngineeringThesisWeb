package org.webapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.webapp.models.EventEntity;

import java.util.List;

/**
 * Created by Patryk on 2015-11-19.
 */

@Repository("events")
public interface EventRepository extends JpaRepository<EventEntity, Long> {

    @Query
    List<EventEntity> findByWorker(short code);

//    @Query
//    List<EventEntity> findEventsByActiveWorkers(){
//     //todo DOKONCZYC TUTAJ INNER JOINEM
//    }
}
