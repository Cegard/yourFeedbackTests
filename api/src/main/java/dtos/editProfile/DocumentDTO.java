package dtos.editProfile;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class DocumentDTO {
    private String id;
    private String name;
    private String status;

    public DocumentDTO() {
        this.id = "1";
        this.name="Cedula";
        this.status="ACTIVE";

    }

    @Override
    public String toString() {
        return "\"id\":\"" + id + "\"";
    }

}
