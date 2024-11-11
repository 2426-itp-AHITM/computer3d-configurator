package at.ac.htl.features.motherboard;

public record MotherboardDto(
    Long motherboard_id,
    String name,
    Float price,
    String socket,
    String form_factor,
    Long max_memory,
    Long memory_slots,
    String color
) {

} 