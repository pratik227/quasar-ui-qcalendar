(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[194],{"13c2":function(n,t,e){"use strict";e.r(t),t["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n\n    <div class="title-bar row items-center overflow-hidden">\n      <q-btn flat color="white" icon="fas fa-chevron-left" class="direction-button" style="height: 100%;" @click="onPrev"></q-btn>\n      <transition :name="transition" appear>\n        <div :key="parsedStart.date" class="row justify-between items-center text-white overflow-hidden" style="width: calc(100% - 112px)">\n          <div v-for="day in days" :key="day.date" class="col-auto" :style="dayStyle">\n            <q-btn flat :class="dayClass(day)" style="line-height: unset;" @click="selectedDate = day.date; transition = \'\'">\n              <div class="text-center" style="width: 100%;">{{ monthFormatter(day, true) }}</div>\n              <div class="text-center text-bold" style="width: 100%;  font-size: 16px;">{{ dayFormatter(day, false) }}</div>\n              <div class="text-center" style="width: 100%; font-size: 10px;">{{ weekdayFormatter(day, true) }}</div>\n            </q-btn>\n          </div>\n        </div>\n      </transition>\n      <q-btn flat color="white" icon="fas fa-chevron-right" class="direction-button" style="height: 100%;" @click="onNext"></q-btn>\n    </div>\n\n    <div style="width: 800px; width: 100%; height: 200px; border: #c0c0c0 1px solid; overflow: auto;">\n      <q-calendar\n        v-model="selectedDate"\n        :interval-height="50"\n        no-scroll\n        class="calendar-container"\n        view="day"\n        hide-header\n        locale="en-us"\n        style="border-top: none; width: 1200px; height: 1200px;"\n      >\n        <template #day-body>\n          <q-card v-for="item in 20" :key="item" class="my-event row justify-center ellipsis" style="top: 50px" :style="{\'left\': ((item - 1) * 50 + 2) + \'px\'}">\n            <q-card-section>\n            {{item}}\n            </q-card-section>\n          </q-card>\n        </template>\n      </q-calendar>\n    </div>\n\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nconst CURRENT_DAY = new Date()\n\nfunction getCurrentDay (day) {\n  const newDay = new Date(CURRENT_DAY)\n  newDay.setDate(day)\n  const tm = QCalendar.parseDate(newDay)\n  return tm.date\n}\n\nexport default {\n  data () {\n    return {\n      selectedDate: getCurrentDay(CURRENT_DAY.getDate()),\n      weekdays: [0, 1, 2, 3, 4, 5, 6],\n      locale: \'en-us\',\n      monthFormatter: this.monthFormatterFunc(),\n      dayFormatter: this.dayFormatterFunc(),\n      weekdayFormatter: this.weekdayFormatterFunc(),\n      transitionPrev: \'slide-right\',\n      transitionNext: \'slide-left\',\n      transition: \'\'\n    }\n  },\n\n  beforeMounted () {\n  },\n\n  computed: {\n    weekdaySkips () {\n      return QCalendar.getWeekdaySkips(this.weekdays)\n    },\n\n    parsedStart () {\n      if (this.selectedDate) {\n        return QCalendar.getStartOfWeek(QCalendar.parseTimestamp(this.selectedDate), this.weekdays, this.today)\n      }\n      return undefined\n    },\n\n    parsedEnd () {\n      if (this.selectedDate) {\n        return QCalendar.getEndOfWeek(QCalendar.parseTimestamp(this.selectedDate), this.weekdays, this.today)\n      }\n      return undefined\n    },\n\n    today () {\n      const newDay = new Date(CURRENT_DAY)\n      const tm = QCalendar.parseDate(newDay)\n      return tm\n    },\n\n    days () {\n      if (this.parsedStart && this.parsedEnd) {\n        return QCalendar.createDayList(\n          this.parsedStart,\n          this.parsedEnd,\n          this.today,\n          this.weekdaySkips\n        )\n      }\n      return []\n    },\n\n    dayStyle () {\n      return {\n        width: 100 / this.weekdays.length + \'%\'\n      }\n    }\n  },\n\n  methods: {\n    onPrev () {\n      const ts = QCalendar.addToDate(this.parsedStart, { day: -7 })\n      this.selectedDate = ts.date\n      this.transition = \'q-transition--\' + this.transitionPrev\n    },\n\n    onNext () {\n      const ts = QCalendar.addToDate(this.parsedStart, { day: 7 })\n      this.selectedDate = ts.date\n      this.transition = \'q-transition--\' + this.transitionNext\n    },\n\n    dayClass (day) {\n      return {\n        row: true,\n        \'justify-center\': true,\n        \'selected-date\': this.selectedDate === day.date\n      }\n    },\n\n    monthFormatterFunc () {\n      const longOptions = { timeZone: \'UTC\', month: \'long\' }\n      const shortOptions = { timeZone: \'UTC\', month: \'short\' }\n\n      return QCalendar.createNativeLocaleFormatter(\n        this.locale,\n        (_tms, short) => short ? shortOptions : longOptions\n      )\n    },\n\n    weekdayFormatterFunc () {\n      const longOptions = { timeZone: \'UTC\', weekday: \'long\' }\n      const shortOptions = { timeZone: \'UTC\', weekday: \'short\' }\n\n      return QCalendar.createNativeLocaleFormatter(\n        this.locale,\n        (_tms, short) => short ? shortOptions : longOptions\n      )\n    },\n\n    dayFormatterFunc () {\n      const longOptions = { timeZone: \'UTC\', day: \'2-digit\' }\n      const shortOptions = { timeZone: \'UTC\', day: \'numeric\' }\n\n      return QCalendar.createNativeLocaleFormatter(\n        this.locale,\n        (_tms, short) => short ? shortOptions : longOptions\n      )\n    }\n  }\n}\n<\/script>\n\n<style lang="sass" scoped>\n.title-bar\n  width: 100%\n  height: 70px\n  background: #9c27b0\n  display: flex\n  flex-direction: row\n  flex: 1\n\n.direction-button\n  background: #9c27b0\n  color: white\n  z-index: 20\n\n.selected-date\n  color: #9c27b0\n  background: white\n\n.my-event\n  position: absolute\n  width: 46px\n  height: 46px\n  margin: 2px\n\n.calendar-container\n  position: relative\n</style>\n'}}]);