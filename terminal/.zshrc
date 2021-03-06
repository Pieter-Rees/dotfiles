# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=/Users/pieter/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="powerlevel9k/powerlevel9k"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

export NVM_DIR="/Users/pieter/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

export SAAS_DB="reef"
export SAAS_HOST="localhost"
alias saasrestoredb="scp -l 8192 backups@bluebucket.onepercentclub.com:/home/backups/saas-backups/saas/reef-prod-current.sql.bz2 ./; dropdb $SAAS_DB; createdb $SAAS_DB; bzcat reef-prod-current.sql.bz2 | psql $SAAS_DB; rm reef-prod-current.sql.bz2; echo \"UPDATE clients_client SET domain_url=CONCAT(client_name, '.$SAAS_HOST');\" | psql $SAAS_DB"

alias runserver="cd ~/development/bluebottle; python manage.py runserver; cd -"
alias serve="cd ~/development/reef/frontend; CLIENTS=onepercent LOCALES=en MAPS_API_KEY=AIzaSyCsUbYPmNR84nin7GWy-hJ-jnZQO1g70SA PROXY=http://localhost:8000 ember serve --live-reload-port=35729"
export PATH="/usr/local/opt/postgresql@9.4/bin:$PATH"

export PYENV_VIRTUALENV_DISABLE_PROMPT=0
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"

### Theming extra's

POWERLEVEL9K_SHOW_CHANGESET=true
POWERLEVEL9K_PROMPT_ON_NEWLINE=true
POWERLEVEL9K_PROMPT_ADD_NEWLINE=true
POWERLEVEL9K_SHORTEN_DIR_LENGTH=3
POWERLEVEL9K_SHORTEN_STRATEGY="truncate_from_right"
POWERLEVEL9K_MULTILINE_SECOND_PROMPT_PREFIX="ᗢ "
POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(vcs dir_writable)
POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(node_version ssh)


### Theming color's

POWERLEVEL9K_STATUS_FOREGROUND='007'
POWERLEVEL9K_STATUS_BACKGROUND='234'
POWERLEVEL9K_RAM_FOREGROUND='007'
POWERLEVEL9K_RAM_BACKGROUND='234'
POWERLEVEL9K_CONTEXT_FOREGROUND='007'
POWERLEVEL9K_CONTEXT_BACKGROUND='234'
POWERLEVEL9K_VCS_FOREGROUND='007'
POWERLEVEL9K_VCS_BACKGROUND='234'
POWERLEVEL9K_NODE_VERSION_FOREGROUND='007'
POWERLEVEL9K_NODE_VERSION_BACKGROUND='234'

POWERLEVEL9K_DIR_HOME_FOREGROUND='blue'
POWERLEVEL9K_DIR_HOME_BACKGROUND='234'
POWERLEVEL9K_DIR_HOME_SUBFOLDER_FOREGROUND='yellow'
POWERLEVEL9K_DIR_HOME_SUBFOLDER_BACKGROUND='234'
POWERLEVEL9K_DIR_DEFAULT_FOREGROUND='red'
POWERLEVEL9K_DIR_DEFAULT_BACKGROUND='234'

POWERLEVEL9K_VCS_CLEAN_FOREGROUND='blue'
POWERLEVEL9K_VCS_CLEAN_BACKGROUND='234'
POWERLEVEL9K_VCS_UNTRACKED_FOREGROUND='yellow'
POWERLEVEL9K_VCS_UNTRACKED_BACKGROUND='234'
POWERLEVEL9K_VCS_MODIFIED_FOREGROUND='red'
POWERLEVEL9K_VCS_MODIFIED_BACKGROUND='234'

### Tmux Aliasses

alias next="tmux1": "fuck"
