(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[216],{"92ea":function(n,e,d){"use strict";d.r(e),e["default"]='<template>\n  <div class="row justify-center q-pa-md q-gutter-sm" style="max-width: 800px; width: 100%;">\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="month"\n      bordered\n      :disabled-days="disabledDays"\n      mini-mode\n      :day-style="modifiedStyle"\n      locale="en-us"\n      style="max-width: 300px; min-width: auto; overflow: hidden"\n    />\n    <q-calendar\n      ref="calendar"\n      v-model="selectedDate"\n      view="month"\n      bordered\n      :disabled-days="disabledDaysRange"\n      mini-mode\n      :day-style="modifiedStyle"\n      locale="en-us"\n      style="max-width: 300px; min-width: auto; overflow: hidden"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedDate: \'2019-04-01\',\n      disabledDays: [\n        \'2019-04-02\',\n        \'2019-04-03\',\n        \'2019-04-04\',\n        \'2019-04-05\'\n      ],\n      disabledDaysRange: [[\n        \'2019-04-02\',\n        \'2019-04-05\'\n      ]]\n    }\n  },\n  methods: {\n    modifiedStyle (scope) {\n      if (scope.disabled === true) {\n        return {\n          backgroundColor: \'#ffcb9c!important\',\n          cursor: \'not-allowed\'\n        }\n      }\n      return {}\n    }\n  }\n}\n<\/script>\n'}}]);