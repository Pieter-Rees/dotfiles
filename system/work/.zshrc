# BELOW STANDARD CONFIGURATION

export NVM_DIR="/Users/pieter/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

export SAAS_DB="reef"
export SAAS_HOST="localhost"
alias saasrestoredb="scp -l 8192 backups@bluebucket.onepercentclub.com:/home/backups/saas-backups/saas/reef-prod-current.sql.bz2 ./; dropdb $SAAS_DB; createdb $SAAS_DB; bzcat reef-prod-current.sql.bz2 | psql $SAAS_DB; rm reef-prod-current.sql.bz2; echo \"UPDATE clients_client SET domain_url=CONCAT(client_name, '.$SAAS_HOST');\" | psql $SAAS_DB"

alias runserver="cd ~/development/bluebottle; python manage.py runserver; cd -"
export PATH="/usr/local/opt/postgresql@9.4/bin:$PATH"

export PYENV_VIRTUALENV_DISABLE_PROMPT=0
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
