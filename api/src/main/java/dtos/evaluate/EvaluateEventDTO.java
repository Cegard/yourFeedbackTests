package dtos.evaluate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@AllArgsConstructor
public class EvaluateEventDTO {

    public static EvaluateEventDTO qualifyEvent(){
        return new EvaluateEventDTO();
    }

    public static EvaluateEventDTO qualifyEmptyEvent(){
        return new EvaluateEventDTO();
    }

}
