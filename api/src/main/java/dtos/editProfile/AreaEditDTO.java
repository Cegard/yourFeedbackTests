package dtos.editProfile;

public class AreaEditDTO {

    private String id;
    private String name;
    private String status;

    public AreaEditDTO() {
        this.id = "1";
        this.name="";
        this.status="";
    }

    @Override
    public String toString() {
        return "\"id\":\"" + id + "\"";
    }
}
