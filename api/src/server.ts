import fastify from 'fastify'
import { serializerCompiler, validatorCompiler} from "fastify-type-provider-zod";

const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/', async () => {
    return { message: 'Jornada ao Capital API está rodando!'};
});

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server is running on localhost:3333');
});