package dtos.register;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class AreaDTO {
    private String id;

    public AreaDTO() {
        this.id = "1";
    }

    @Override
    public String toString() {
        return "\"id\":\"" + id + "\"";
    }
}
