import formidable from 'formidable'
import { App } from '@tinyhttp/app'
import { spawn } from 'child_process';

const routes = new App()
const script = './audio.py'

const emotionDetected = (audio) => {
  const pyprog = spawn('python3', [script, audio]);

  pyprog.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  pyprog.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  pyprog.on('error', error => console.log(`error: ${error.message}`))

  pyprog.on('exit', (code, signal) => {
    if (code) console.log(`Process exit with code: ${code}`)
    if (signal) console.log(`Process killed with signal: ${signal}`)
    console.log(`done`)
  })

}

routes.post('/api/v1/audio', async (req, res, next) => {
  const form = formidable({ multiples: true })

  const { err, fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err)
        return
      }
      resolve({ err, fields, files })
    })
    form.on('fileBegin', (name, file) => {
      file.name = 'myvoice.wav'
      file.path = `${process.cwd()}/src/tmp/${file.name}`;
    });
  })

  const { voice } = files
  emotionDetected(voice.path)
  const result = `Finalizando audio`;
  res.json({ result })
})

export default routes
