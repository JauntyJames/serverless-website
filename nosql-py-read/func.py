import io
import borneo
import json
import logging

from fdk import response


def handler(ctx, data: io.BytesIO = None):
    err=json.dumps({"message": "Hello NoSQL"})
    resp="No data"
    try:
        provider = borneo.iam.SignatureProvider.create_with_resource_principal()
        compartment_id = provider.get_resource_principal_claim(borneo.ResourcePrincipalClaimKeys.COMPARTMENT_ID_CLAIM_KEY)
        tenant_id = provider.get_resource_principal_claim(borneo.ResourcePrincipalClaimKeys.TENANT_ID_CLAIM_KEY)
        config = borneo.NoSQLHandleConfig('us-ashburn-1', provider).set_logger(None).set_default_compartment(compartment_id)
        handle = borneo.NoSQLHandle(config)
        request = borneo.QueryRequest().set_statement(statement='SELECT * FROM User_eva')
        resp = handle.query(request)
        result = resp.get_results()
        resp = json.dumps(result)
        # logging.getLogger().info('Query Successful: ' + str(resp))

    except (Exception, ValueError) as ex:
        logging.getLogger().error(str(ex))
        resp=str(ex)
    return response.Response(
        ctx, response_data=resp,
        headers={"Content-Type": "application/json"}
    )
