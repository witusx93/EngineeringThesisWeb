package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.webapp.repositories.daoImpl.EventRepositoryImpl;
import org.webapp.repositories.daoImpl.WorkerRepositoryImpl;
import org.webapp.entities.Worker;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    WorkerRepositoryImpl workerRepositoryDAO;

    @Autowired
    EventRepositoryImpl eventRepositoryDAO;

    @Transactional
    public List<Worker> getAllWorkers() {
        return workerRepositoryDAO.getAllWorkers();
    }

//    @Transactional(readOnly=true)
//    public List<WorkerEventDto> getActiveWorkers() {
//        List<Worker> workers = workerRepositoryDAO.getActiveWorkers();
//
//        List<WorkerEventDto> workersDto = new ArrayList<WorkerEventDto>();
//        for (Worker worker : workers) {
//            workersDto.add(new WorkerEventDto(workers,));
//        }
//        return workersDto;
//    }

    @Transactional
    public List<Worker> getActiveWorkers() {
        return workerRepositoryDAO.getActiveWorkers();
    }

    @Transactional
    public void add(Worker worker) {
        worker.setActive((short) 1);
        if (!(worker.getName().trim().equals("") || worker.getSurname().trim().equals("") || worker.getId() == 0))
            workerRepositoryDAO.saveWorker(worker);
    }

    @Transactional
    public void deleteWorker(Worker worker) {

        if (eventRepositoryDAO.getEventsForWorkerId(worker.getCode()).size() > 0) {
            workerRepositoryDAO.setInactiveWorkerForCode(worker.getCode());
        } else {
            workerRepositoryDAO.deleteWorkerForCode(worker.getCode());
        }
    }

    @Transactional
    public Worker getWorker(long id) {

        Worker e = workerRepositoryDAO.getWorkerForId(id);
        return e;

    }

    @Transactional
    public boolean confirmChangesIfExists(Worker newWorker) {

        Worker oldWorker = workerRepositoryDAO.getWorkerForId(newWorker.getCode());
        if (oldWorker.equals(newWorker)) {
            return false;
        } else if (!(newWorker.getName().trim().equals("") || newWorker.getSurname().trim().equals(""))) {
            copyFromOneToAnother(newWorker, oldWorker);
            workerRepositoryDAO.saveWorker(oldWorker);
            return true;
        }

        return false;
    }

    private void copyFromOneToAnother(Worker worker, Worker copy) {

        copy.setId(worker.getId());
        copy.setName(worker.getName());
        copy.setSurname(worker.getSurname());
        copy.setPositionId(worker.getPositionId());
    }


}
