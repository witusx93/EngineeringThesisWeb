<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<body lang="en">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<head>
</head>
<body>

<div class="row">
    <div class="panel panel-default filterable">
        <div class="panel-heading ">
            <h3 class="panel-title custom-font-weight">Lista zamówień</h3>
            <div class="pull-right">
                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span>
                    Filter
                </button>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
            <tr class="filters">
                <th><input type="text" class="form-control custom-element" placeholder="Nr zamówienia" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Etap" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Kod pracownika" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Brakujące elementy" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Data wykonania" disabled></th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${events}" var="event">
                <tr>
                    <td>${event.prim.order_id}</td>
                    <td>${event.prim.stage}</td>
                    <td>${event.worker}</td>
                    <td>${event.missing}</td>
                    <td>${fn:substring((event.date),0 , 16)}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
</body>