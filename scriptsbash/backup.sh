#!/bin/bash

indir="$HOME/Backupdir"

if [[ -d $indir && -e $indir ]]
then
    echo "dossier existe deja"
else
    echo "pas de dossier, je le creer"
    mkdir $indir
fi

cp $HOME/.emacs $indir
cp $HOME/.bashrc $indir
cp $HOME/.bash_aliases $indir
cp $HOME/.gitconfig $indir
cp $HOME/.profile $indir
cp -a $HOME/bin $indir
cp -a $HOME/code $indir
cp -a $HOME/Custom $indir
cp -a $HOME/cv $indir
cp -a $HOME/Downloads $indir
cp -a $HOME/html $indir
cp -a $HOME/nicobot $indir
cp -a $HOME/openclass $indir
cp -a $HOME/pass $indir
cp -a $HOME/projetgit $indir
cp -a $HOME/simplon $indir
cp -a $HOME/test $indir

tar -zcvf backup.tar.gz $indir
