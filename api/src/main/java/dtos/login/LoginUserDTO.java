package dtos.login;

import lombok.Data;
import lombok.experimental.Accessors;
import utils.Utils;

@Data
@Accessors(chain = true)
public class LoginUserDTO {
    private String email;
    private String password;

    public static LoginUserDTO getEmptyLoginUser() {
        return new LoginUserDTO();
    }

    public static LoginUserDTO getRandomLoginUser() {
        return new LoginUserDTO(Utils.getRandomEmail(), Utils.getRandomPassword());
    }

    public static LoginUserDTO getLoginUserWith(String email, String password) {
        return new LoginUserDTO(email, password);
    }

    public LoginUserDTO() {
        this.email = "";
        this.password = "";
    }

    public LoginUserDTO(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
