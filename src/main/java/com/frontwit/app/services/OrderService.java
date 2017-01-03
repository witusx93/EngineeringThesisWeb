package com.frontwit.app.services;

import com.frontwit.app.dto.OrderDto;
import com.frontwit.app.repositories.daoImpl.OrderRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import com.frontwit.app.entities.Order;
import com.frontwit.app.repositories.OrderRepository;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderRepositoryImpl orderRepositoryImpl;

    @Autowired
    EventService eventService;

    @Transactional
    public List<OrderDto> getAllOrders() {
        return getDtosForOrders(orderRepositoryImpl.getAllOrders());
    }

    @Transactional
    public void changeStatusForId(long id) {
        Order order = orderRepositoryImpl.getOrderForId(id);
        order.setActive(order.getActive() == 1 ? (short) 0 : (short) 1);
    }

    @Transactional
    public void add(Order order) {
//todo Dodawanie zamowienia, validacje do tego
      /*  if ((!(order.getName().trim().equals("") || ((Integer) order.getCustomerId()).toString().trim().equals("")))) { //todo || order.getColor().trim().equals("")))) {
            order.setPositionId(1);
            orderRepositoryImpl.save(order);
        }*/
    }

    @Transactional
    public void deleteOrder(Long id) {
        orderRepositoryImpl.deleteOrderForId(id);
    }

    @Transactional
    public void confirmChangesIfExists(Order newOrder) {

        Order order = orderRepositoryImpl.getOrderForId(newOrder.getId());
//todo tutaj tak troche pokretnie, trzeba na front endzie dac wybor klientow, zeby sie kupy trzymalo
        if (eventService.getEventsForOrder(order).size() > 0)
            return;
        if (newOrder.getName().trim().equals(""))
            return;
        //   if (((Integer) newOrder.getCustomerId()).toString().trim().equals(""))
        //     return;
        if (newOrder.getExpress() < 0 || newOrder.getExpress() > 1)
            return;

        orderRepositoryImpl.save(newOrder);
    }

    @Transactional
    public Order getOrderForId(long id) {
        return orderRepositoryImpl.getOrderForId(id);
    }

    private Timestamp getActualTimestamp() {

        Timestamp actualTime = new Timestamp(new java.util.Date().getTime());
        return actualTime;
    }

    @Transactional
    public List<OrderDto> getOrdersForPositionId(Integer posId) {
        return getDtosForOrders(orderRepositoryImpl.getOrdersForPositionId(posId));
    }

    private List<OrderDto> getDtosForOrders(List<Order> orders) {
        List<OrderDto> orderDtos = new ArrayList<>();
        for (Order o : orders) {
            OrderDto orderDto = new OrderDto(o);
            orderDtos.add(orderDto);
        }
        return orderDtos;
    }

}
