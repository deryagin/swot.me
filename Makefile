SHELL := /bin/bash
ROOT := $(CURDIR)
OUT := /dev/stdout

.DEFAULT_GOAL = all
.PHONY: all hello install

all: install

hello:
	echo -e "[RUN] make" $@

install:
	echo -e "[RUN] make" $@
	(cd web/vendor; yarn install --modules-folder=$(ROOT)/node_modules --ignore-optional > $(OUT); cd ..)
	(cd srv/vendor; yarn install --modules-folder=$(ROOT)/node_modules --ignore-optional > $(OUT); cd ..)
	(cd dbs/vendor; yarn install --modules-folder=$(ROOT)/node_modules --ignore-optional > $(OUT); cd ..)
	(cd dpl/vendor; yarn install --modules-folder=$(ROOT)/node_modules --ignore-optional > $(OUT); cd ..)
	(cd test/vendor; yarn install --modules-folder=$(ROOT)/node_modules --ignore-optional > $(OUT); cd ..)

