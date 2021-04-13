import io
import borneo
import json
import logging

from fdk import response


def handler(ctx, data: io.BytesIO = None):
    resp = "No data"
    try:
        body = json.loads(data.getvalue())
        fld_id = body.get("fld_id")
        fld_str = body.get("fld_str")
    except (Exception) as ex:
        logging.getLogger().error('ERROR: Missing key in payload' + str(ex))
        raise

    try:
        provider = borneo.iam.SignatureProvider.create_with_resource_principal()
        compartment_id = provider.get_resource_principal_claim(
            borneo.ResourcePrincipalClaimKeys.COMPARTMENT_ID_CLAIM_KEY)
        tenant_id = provider.get_resource_principal_claim(
            borneo.ResourcePrincipalClaimKeys.TENANT_ID_CLAIM_KEY)
        config = borneo.NoSQLHandleConfig(
            'us-ashburn-1', provider).set_logger(None).set_default_compartment(compartment_id)
        handle = borneo.NoSQLHandle(config)
        request = borneo.PutRequest().set_table_name('user_eva')
        value = {'fld_id': fld_id, 'fld_str': fld_str}
        request.set_value(value)
        handle.put(request)
        resp = json.dumps(value)
    except (Exception, ValueError) as ex:
        logging.getLogger().error(str(ex))
        resp = str(ex)
    return response.Response(
        ctx, response_data=resp,
        headers={"Content-Type": "application/json"}
    )
