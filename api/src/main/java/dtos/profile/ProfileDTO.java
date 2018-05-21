package dtos.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;
import utils.Utils;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class ProfileDTO {
    private DocumentTypeDTO documentType;
    private String document;
    private String name;
    private String lastName;
    private String gender;
    private String email;
    private String password;
    private String validatePassword;
    private AreaDTO area;

    public static ProfileDTO getEmptyProfile() {
        return new ProfileDTO();
    }

    public static ProfileDTO getRandomProfileWith(String email, String password, String verificationPassword) {
        return new ProfileDTO(email, password, verificationPassword);
    }

    public static ProfileDTO getRandomProfile() {
        String password = Utils.getRandomPassword();
        return new ProfileDTO(Utils.getRandomNumeric(), Utils.getRandomString(), Utils.getRandomString(), Utils.getRandomString(), Utils.getRandomEmail(), password, password);
    }

    public ProfileDTO() {
        this.documentType = new DocumentTypeDTO();
        this.document = "";
        this.area = new AreaDTO();
        this.name = "";
        this.lastName = "";
        this.gender = "";
        this.email = "";
        this.password = "";
        this.validatePassword = "";
    }

    public ProfileDTO(String email, String password, String verificationPassword) {
        this.documentType = new DocumentTypeDTO();
        this.document = Utils.getRandomNumeric();
        this.area = new AreaDTO();
        this.name = Utils.getRandomString();
        this.lastName = Utils.getRandomString();
        this.gender = Utils.getRandomString();
        this.email = email;
        this.password = password;
        this.validatePassword = verificationPassword;
    }

    public ProfileDTO(String document, String name, String lastName, String gender, String email, String password, String validatePassword) {
        this.documentType = new DocumentTypeDTO();
        this.document = document;
        this.area = new AreaDTO();
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.validatePassword = password;
    }
}
