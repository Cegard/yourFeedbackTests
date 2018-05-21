package dtos.login;

import lombok.Data;
import lombok.experimental.Accessors;
import utils.Utils;

@Data
@Accessors(chain = true)
public class LoginUserDTO {
    private String username;
    private String password;

    public static LoginUserDTO getEmptyLoginUser() {
        return new LoginUserDTO();
    }

    public static LoginUserDTO getRandomLoginUser() {
        return new LoginUserDTO(Utils.getRandomEmail(), Utils.getRandomPassword());
    }

    public static LoginUserDTO getLoginUserWith(String username, String password) {
        return new LoginUserDTO(username, password);
    }

    public LoginUserDTO() {
        this.username = "";
        this.password = "";
    }

    public LoginUserDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
