/**
 * NOTE: This class is auto generated by the swagger code generator program (2.4.5).
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */
package jupyter.catalog.generated.swagger.server.api;

import jupyter.catalog.generated.swagger.model.Failure;
import jupyter.catalog.generated.swagger.model.RenderedNotebookDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.*;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Api(value = "NotebookController", description = "the NotebookController API")
public interface NotebookControllerApi {

    Logger log = LoggerFactory.getLogger(NotebookControllerApi.class);

    default Optional<ObjectMapper> getObjectMapper() {
        return Optional.empty();
    }

    default Optional<HttpServletRequest> getRequest() {
        return Optional.empty();
    }

    default Optional<String> getAcceptHeader() {
        return getRequest().map(r -> r.getHeader("Accept"));
    }

    @ApiOperation(value = "", nickname = "displayNotebook", notes = "", response = RenderedNotebookDTO.class, tags={ "notebook-controller", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = RenderedNotebookDTO.class),
        @ApiResponse(code = 400, message = "Bad Request", response = Failure.class),
        @ApiResponse(code = 401, message = "Unauthorized", response = Failure.class),
        @ApiResponse(code = 403, message = "Forbidden", response = Failure.class),
        @ApiResponse(code = 404, message = "Not Found", response = Failure.class),
        @ApiResponse(code = 500, message = "Internal Server Error", response = Failure.class) })
    @RequestMapping(value = "/notebook/display",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    default ResponseEntity<RenderedNotebookDTO> displayNotebook() {
        if(getObjectMapper().isPresent() && getAcceptHeader().isPresent()) {
            if (getAcceptHeader().get().contains("application/json")) {
                try {
                    return new ResponseEntity<>(getObjectMapper().get().readValue("{  \"path\" : \"path\",  \"content\" : \"content\"}", RenderedNotebookDTO.class), HttpStatus.NOT_IMPLEMENTED);
                } catch (IOException e) {
                    log.error("Couldn't serialize response for content type application/json", e);
                    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        } else {
            log.warn("ObjectMapper or HttpServletRequest not configured in default NotebookControllerApi interface so no example is generated");
        }
        return new ResponseEntity<>(HttpStatus.NOT_IMPLEMENTED);
    }

}
