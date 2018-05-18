package dtos.evaluate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class EvaluatePersonDTO {

    public static EvaluatePersonDTO qualifyPerson(){
        return new EvaluatePersonDTO();
    }

    public static EvaluatePersonDTO qualifyEmptyPerson(){
        return new EvaluatePersonDTO();
    }

}
