package at.ac.htl.features.gpu;

import at.ac.htl.features.gpu.GPU;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class GPURepository implements PanacheRepository<GPU> {
}