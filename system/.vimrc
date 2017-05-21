set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=4
set autoindent
set textwidth=80

set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'L9'
Plugin 'itchyny/lightline.vim'

call vundle#end()
filetype plugin indent on

colorscheme darkblue
execute pathogen#infect()
call pathogen#helptags()
