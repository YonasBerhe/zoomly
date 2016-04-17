import subprocess
import json

def run_command(command):
    p = subprocess.Popen(command,
                         stdout=subprocess.PIPE,
                         stderr=subprocess.STDOUT)
    body = ''
    for line in iter(p.stdout.readline, b''):
        body += line
    return body

data = {}
for subreddit in ['dataisbeautiful', 'earthporn', 'Seattle', 'birdswitharms' ,'cityporn', 'pics', 'programmerhumor']:
    json_data = run_command(['bash', 'download.sh', subreddit])
    data[subreddit] = json.loads(json_data)

print json.dumps(data)