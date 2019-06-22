package jupyter.catalog.domain.notebook;

import feign.Logger;
import jupyter.catalog.config.ProfileConfigService;
import jupyter.notebook.common.SwaggerClientApi;
import jupyter.notebook.generated.swagger.client.api.DisplayControllerApi;
import lombok.val;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotebookBridge {

    private NotebookConverter notebookConverter;
    private ProfileConfigService profileConfigService;

    @Autowired
    public NotebookBridge(NotebookConverter notebookConverter,
                          ProfileConfigService profileConfigService) {

        this.notebookConverter = notebookConverter;
        this.profileConfigService = profileConfigService;
    }

    public DisplayControllerApi buildDisplayApiClient() {
        val endpoint = profileConfigService.getNotebookEndpoint();
        val port = profileConfigService.getNotebookPort();
        val client = SwaggerClientApi.buildClient(DisplayControllerApi.class,
                endpoint, port, null, null,
                Logger.Level.BASIC);

        return client;
    }
}
