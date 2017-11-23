
/*
Exemplo post:
https://stackoverflow.com/questions/3324717/sending-http-post-request-in-java

**********************************************************************************
HttpClient httpClient = HttpClients.createDefault();
HttpPost httpPost = new HttpPost("http://www.a-domain.com/foo/");

// Request parameters and other properties.
List<NameValuePair> params = new ArrayList<NameValuePair>(2);
params.add(new BasicNameValuePair("param-1", "12345"));
params.add(new BasicNameValuePair("param-2", "Hello!"));
httpPost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

//Execute and get the response.
HttpResponse response = httpClient.execute(httpPost);
HttpEntity entity = response.getEntity();

if (entity != null) {
    InputStream instream = entity.getContent();
    try {
        // do something useful
    } finally {
        instream.close();
    }
}
********************************************************************************

http://app.omie.com.br/api/v1/financas/boleto/

*/

public class BoletoWS extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response) {
		PrintWriter out = response.getPrintWriter();

		String boletoListarRequest;
		String boletoListarResponse = this.executeBoletoWebService(boletoListarRequest);

		out.print(boletoListarResponse);

	}

	private String executeBoletoWebService(String boletoListarRequest) {
		String boletoListarResponse = "";

		HttpClient httpClient = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost("http://app.omie.com.br/api/v1/financas/boleto/");

		// Request parameters and other properties.
		List<NameValuePair> params = new ArrayList<NameValuePair>(2);
		params.add(new BasicNameValuePair("param-1", "12345"));
		params.add(new BasicNameValuePair("param-2", "Hello!"));
		httpPost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

		//Execute and get the response.
		HttpResponse response = httpClient.execute(httpPost);
		HttpEntity entity = response.getEntity();

		if (entity != null) {
			InputStream instream = entity.getContent();

			try {
				// do something useful

			} finally {
				instream.close();

			}

		}

		return boletoListarResponse;

	}

}