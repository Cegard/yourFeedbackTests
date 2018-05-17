package dtos.register;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class DocumentTypeDTO {
    private String id;

    public DocumentTypeDTO() {
        this.id = "1";
    }

    @Override
    public String toString() {
        return "\"id\":\"" + id + "\"";
    }
}
