package com.frontwit.app.services;

import com.frontwit.app.dto.WorkerDto;
import com.frontwit.app.dto.WorkerEventDto;
import com.frontwit.app.entities.Event;
import com.frontwit.app.entities.Worker;
import com.frontwit.app.exceptions.ResourcesDuplicationException;
import com.frontwit.app.exceptions.ResourcesNotFoundException;
import com.frontwit.app.repositories.daoImpl.WorkerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 2015-11-02.
 */
@Service
public class WorkerService {

    @Autowired
    WorkerRepositoryImpl workerRepositoryDAO;

    @Autowired
    EventService eventService;

    @Autowired
    PositionService positionService;

    @Transactional
    public List<WorkerDto> getActiveWorkers() {

        List<Worker> workers = workerRepositoryDAO.getActiveWorkers();
        return getDtosForWorkers(workers);
    }

    @Transactional
    public WorkerEventDto getEventsForWorker(long id) throws ResourcesNotFoundException {

        Worker worker = workerRepositoryDAO.getWorkerForId(id);
        if(worker == null)
            throw new ResourcesNotFoundException();
        List<Event> events = eventService.getEventDtosForWorkerId(id);

        return new WorkerEventDto(worker, events);
    }

    @Transactional
    public void addWorker(WorkerDto workerDto) throws ResourcesDuplicationException {

        if (workerRepositoryDAO.getWorkerForCode(workerDto.getCode()) != null)
            throw new ResourcesDuplicationException();
        workerRepositoryDAO.saveWorker(workerDtoToWorker(workerDto));
    }

    @Transactional
    public void deleteWorker(long id) throws ResourcesNotFoundException {

        Worker worker = workerRepositoryDAO.getWorkerForId(id);
        if (worker == null)
            throw new ResourcesNotFoundException();
        setInactivateWorker(worker);
        workerRepositoryDAO.saveWorker(worker);
    }

    @Transactional
    public WorkerDto getWorkerForId(long id) throws ResourcesNotFoundException {

        return getDtoForWorker(workerRepositoryDAO.getWorkerForId(id));
    }

    @Transactional
    public WorkerDto updateWorker(WorkerDto workerDto) throws ResourcesNotFoundException {

        Worker updatedWorker = workerDtoToWorker(workerDto);
        Worker oldWorker = workerRepositoryDAO.getWorkerForId(workerDto.getId());
        if(!isWorkerCodeUnique(updatedWorker) || oldWorker == null)
            throw new ResourcesNotFoundException();
        copyWorker(oldWorker, updatedWorker);
        workerRepositoryDAO.saveWorker(oldWorker);
        return workerDto;
    }

    private static void copyWorker(Worker w1, Worker w2) {

        w1.setName(w2.getName());
        w1.setSurname(w2.getSurname());
        w1.setCode(w2.getCode());
        w1.setPosition(w2.getPosition());
        w1.setActive(w2.getActive());
    }

    private WorkerDto getDtoForWorker(Worker worker) throws ResourcesNotFoundException {

        if (worker == null)
            throw new ResourcesNotFoundException();
        return new WorkerDto(worker);
    }

    private List<WorkerDto> getDtosForWorkers(List<Worker> workers) {

        List<WorkerDto> workerDtos = new ArrayList<>();
        for (Worker w : workers) {
            workerDtos.add(new WorkerDto(w));
        }
        return workerDtos;
    }

    private Worker workerDtoToWorker(WorkerDto dto) {

        Worker worker = new Worker();
        worker.setId(dto.getId());
        worker.setName(dto.getName());
        worker.setSurname(dto.getSurname());
        worker.setCode(dto.getCode());
        worker.setPosition(positionService.getPositionForName(dto.getPosition()));
        return worker;
    }

    //todo Poprawic to usuwanie jakos lepiej, bo dodawanie nie moze byc
    private Worker setInactivateWorker(Worker worker) {

        worker.setActive((short) 0);
        worker.setCode((short) (worker.getCode() + 1000));
        return worker;
    }

    private boolean isWorkerCodeUnique(Worker worker) {

        Worker w = workerRepositoryDAO.getWorkerForCode(worker.getCode());
        return w == null ? true : w.getId() == worker.getId() ? true : false;
    }
}
