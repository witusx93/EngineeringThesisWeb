package org.webapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.webapp.entities.Component;
import org.webapp.repositories.daoImpl.ComponentRepositoryImpl;

import java.util.List;

/**
 * Created by Patryk on 14.05.2016.
 */
@Service
public class ComponentService {

    @Autowired
    ComponentRepositoryImpl componentRepositoryDAO;

    public List<Component> getComponents(long id){
        return componentRepositoryDAO.getComponentsForOrderId(id);
    }



}
