package com.example.demo.controller;

import com.example.demo.model.Complaint;
import com.example.demo.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins ="https://smartcomplaintsystem.netlify.com")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;

    @PostMapping("/complaints")
    public Complaint createComplaint(@RequestBody Complaint complaint) {
        return complaintService.createComplaint(complaint);
    }

    @GetMapping("/complaints")
    public List<Complaint> getAllComplaints() {
        return complaintService.getAllComplaints();
    }

    @GetMapping("/complaints/user/{userId}")
    public List<Complaint> getUserComplaints(@PathVariable Long userId) {
        return complaintService.getUserComplaints(userId);
    }

    @PutMapping("/complaints/{id}")
    public Complaint updateStatus(@PathVariable Long id, @RequestBody Complaint updated) {
        return complaintService.updateStatus(id, updated);
    }
}