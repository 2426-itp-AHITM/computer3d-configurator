package at.ac.htl.features.internalHarddrive;

import at.ac.htl.features.powersupply.PowersupplyDto;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class InternalHarddriveMapper {
    public InternalHarddriveDto toResource(InternalHarddrive harddrive){
        return new InternalHarddriveDto(
                harddrive.internalHarddrive_id,
                harddrive.name,
                harddrive.price,
                harddrive.capacity,
                harddrive.pricePerGb,
                harddrive.type,
                harddrive.cache,
                harddrive.formFactor,
                harddrive.memoryInterface,
                harddrive.image


        );
    }
}
