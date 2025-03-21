package at.ac.htl.features.gpu;

import java.util.List;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


@Path("/gpus")
@Produces(MediaType.APPLICATION_JSON)
public class GPUResource  {
    @Inject GPURepository gpuRepository;
    @Inject GPUMapper gpuMapper;

    @GET
    public List<GPUDto> allGPU(){
        var gpus = gpuRepository.findAll()
                .stream()
                .map(gpuMapper::toResource)
                .toList();
        return  gpus;
    }

}
