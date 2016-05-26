<template>
  <div class="dataTables_wrapper no-footer">
    <table class="table table-condensed table-striped table-bordered table-hover dataTable no-footer">
      <thead>
        <tr>
          <th
           class="sorting_disabled"
           rowspan="1"
           colspan="1"
           style="width: 186px"
           v-for="(key, text) in cols">{{text}}</th>
           <th
            class="sorting_disabled"
            rowspan="1"
            colspan="1"
            style="width: 186px">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :class="getClass($index)">
          <td v-for="(key, text) in cols">{{item[key]}}</td>
          <td>
						<a class="green">
							<i class="icon-pencil bigger-130"></i>
						</a>
						<a class="red">
							<i class="icon-trash bigger-130"></i>
						</a>
					</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col-sm-6">
        <div class="dataTables_info">
          共{{max}}条记录
        </div>
      </div>
      <div class="col-sm-6">
        <div class="dataTables_paginate paging_bootstrap">
          <ul class="pagination">
            <li class="prev">
              <a><i class="icon-double-angle-left"></i></a>
            </li>
            <li v-for="item in arrPage"><a>{{item}}</a></li>
            <li class="next">
              <a><i class="icon-double-angle-right"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.dataTables_wrapper a {
  cursor: pointer;
}
</style>

<script>
import {HOST} from 'services/constant'

export default {
  props: {
    key: {
      type: String
    },
    value: {
      type: String
    },
    url: {
      type: String,
      required: true
    },
    cols: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      page: 1,
      rows: 10,
      max: 0,
      data: {},
      arrPage: []
    }
  },
  methods: {
    getClass (index) {
      if (index % 2) {
        return 'even'
      } else {
        return 'odd'
      }
    },
    loadData () {
      this.$http.get(`${HOST}${this.url}`, {
        page: this.page,
        rows: this.rows
      }).then(res => {
        this.max = res.data.total
        this.data = res.data.data
        this.arrPage = []

        for (let i = 1; i <= res.data.totalPage; i++) {
          this.arrPage.push(i)
        }
      })
    }
  },
  created () {
    this.loadData()
  }
}
</script>
