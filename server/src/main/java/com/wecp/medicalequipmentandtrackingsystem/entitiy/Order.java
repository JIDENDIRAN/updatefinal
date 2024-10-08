package com.wecp.medicalequipmentandtrackingsystem.entitiy;


import javax.persistence.*;
import java.util.Date;
@Entity
@Table(name = "orders") // do not change table name
public class Order {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private Date orderDate;
private String status;
private Integer quantity;

@ManyToOne
private Equipment equipment;



public Order() {
}


public Order(Long id, Date orderDate, String status, Integer quantity, Equipment equipment) {
    this.id = id;
    this.orderDate = orderDate;
    this.status = status;
    this.quantity = quantity;
    this.equipment = equipment;
}


public Long getId() {
    return id;
}

public void setId(Long id) {
    this.id = id;
}

public Date getOrderDate() {
    return orderDate;
}

public void setOrderDate(Date orderDate) {
    this.orderDate = orderDate;
}

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

public Integer getQuantity() {
    return quantity;
}

public void setQuantity(Integer quantity) {
    this.quantity = quantity;
}

public Equipment getEquipment() {
    return equipment;
}

public void setEquipment(Equipment equipment) {
    this.equipment = equipment;
}











    
}
