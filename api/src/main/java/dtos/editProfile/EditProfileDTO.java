package dtos.editProfile;

import dtos.register.AreaDTO;
import dtos.register.DocumentTypeDTO;
import dtos.register.RegisterUserDTO;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;
import utils.Utils;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class EditProfileDTO {

    private DocumentDTO documentType;
    private String document;
    private String name;
    private String lastName;
    private String gender;
    private String email;
    private String password;
    private String validatePassword;
    private AreaEditDTO area;



    public static EditProfileDTO getEmptyEditUser() {
        return new EditProfileDTO();
    }

    public static EditProfileDTO getRandomEditUserWith(String email, String password, String verificationPassword) {
        return new EditProfileDTO(email,password,verificationPassword);
    }

    public static EditProfileDTO getRandomRegisterUser() {
        String password = Utils.getRandomPassword();
        return new EditProfileDTO(Utils.getRandomNumeric(), Utils.getRandomString(), Utils.getRandomString(), Utils.getRandomString(), Utils.getRandomEmail(), password, password);
    }



    public EditProfileDTO() {
        this.documentType = new DocumentDTO();
        this.document = "";
        this.area = new AreaEditDTO();
        this.name = "";
        this.lastName = "";
        this.gender = "";
        this.email = "";
        this.password = "";
        this.validatePassword = "";
    }

    public EditProfileDTO(String email, String password,String verificationPassword) {
        this.documentType = new DocumentDTO();
        this.document = Utils.getRandomNumeric();
        this.area = new AreaEditDTO();
        this.name =Utils.getRandomString();
        this.lastName = Utils.getRandomString();
        this.gender = Utils.getRandomString();
        this.email = Utils.getRandomEmail();
        this.password = password;
        this.validatePassword = verificationPassword;
    }

    public EditProfileDTO(String document, String name, String lastName, String gender, String email, String password, String validatePassword) {
        this.documentType = new DocumentDTO();
        this.document = document;
        this.area = new AreaEditDTO();
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.validatePassword = password;
    }

}
