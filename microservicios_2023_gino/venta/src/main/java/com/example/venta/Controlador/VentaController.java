package com.example.venta.Controlador;

import com.example.venta.Entity.Venta;
import com.example.venta.Service.VentaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/venta")
public class VentaController {
    @Autowired
    private VentaService ventaService;

    @GetMapping()
    public ResponseEntity<List<Venta>> list() {
        return ResponseEntity.ok().body(ventaService.listar());
    }

    @PostMapping()
    public ResponseEntity<Venta> save(@RequestBody Venta venta) {
        return ResponseEntity.ok(ventaService.guardar(venta));
    }

    @PutMapping()
    public ResponseEntity<Venta> update(@RequestBody Venta venta) {
        return ResponseEntity.ok(ventaService.actualizar(venta));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> listById(@PathVariable(required = true) Integer id) {
        return ResponseEntity.ok().body(ventaService.listarPorId(id).get());
    }

    @DeleteMapping("/{id}")
    public String deleteById(@PathVariable(required = true) Integer id) {
        ventaService.eliminarPorId(id);
        return "Eliminacion Correcta";
    }
}
