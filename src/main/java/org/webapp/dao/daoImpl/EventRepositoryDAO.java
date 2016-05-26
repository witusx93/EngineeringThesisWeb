package org.webapp.dao.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.dao.EventRepository;
import org.webapp.models.EventEntity;
import org.webapp.models.PrimaryKeyEvents;
import org.webapp.models.WorkerEntity;

import java.util.List;

/**
 * Created by Patryk on 2016-01-05.
 */
@Repository
@Transactional
public class EventRepositoryDAO {

    @Autowired
    EventRepository eventRepository;

//    public List<EventEntity> getEventsForActiveWorkers(){
//        return eventRepository. DOKONCZYC
//    }

    public List<EventEntity> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<EventEntity> getEventsForWorkerCode(short code) {
        return eventRepository.findByWorkerCode(code);
    }

    public void deleteEventForPrimaryKey(PrimaryKeyEvents prim){

        EventEntity event = eventRepository.findByPrimOrderIdAndPrimStage(prim.getOrderId(),prim.getStage());
        eventRepository.delete(event);
    }

    public List<EventEntity> getEventsForOrder(long id){
        return eventRepository.findByPrimOrderId(id);
    }

}
