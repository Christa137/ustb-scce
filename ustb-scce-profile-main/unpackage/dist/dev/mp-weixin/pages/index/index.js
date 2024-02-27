"use strict";
const common_vendor = require("../../common/vendor.js");
const fuiButton = () => "../../components/firstui/fui-button/fui-button.js";
const fuiRow = () => "../../components/firstui/fui-row/fui-row.js";
const fuiCol = () => "../../components/firstui/fui-col/fui-col.js";
const _sfc_main = {
  data() {
    return {
      valueInput: "",
      sign: "确定",
      value: "",
      show: true,
      pictureId: -1,
      jsonData: [],
      detailData: {},
      temp: {}
    };
  },
  watch: {
    value(newVal, oldVal) {
      this.valueInput = newVal;
    }
  },
  components: {
    // firstPage,
    fuiButton,
    fuiRow,
    fuiCol
  },
  methods: {
    changeHandle() {
      this.sign = this.sign == "确定" ? "返回" : "确定";
      this.show = this.show == true ? false : true;
      this.pictureId = this.sign == "返回" ? -1 : this.pictureId;
      common_vendor.index.request({
        url: "http://120.53.84.25:8001/api/v1/faculty/detail/" + this.valueInput,
        method: "get",
        dataType: "json",
        success: (res2) => {
          this.detailData = res2.data.data;
          console.log(this.detailData);
        },
        fail: (err) => {
          console.log(res.data);
        }
      });
    },
    handleDetail(index) {
      console.log(index);
      this.pictureId = index;
      console.log(this.pictureId);
      this.show = this.sign == "确定" ? this.show == true ? false : true : 0;
      this.sign = this.sign == "确定" ? "返回" : this.sign;
      common_vendor.index.request({
        url: "http://120.53.84.25:8001/api/v1/faculty/detail/" + (this.pictureId + 1),
        method: "get",
        dataType: "json",
        success: (res2) => {
          this.detailData = res2.data.data;
        },
        fail: (err) => {
          console.log(res.data);
        }
      });
    }
  },
  mounted() {
    common_vendor.index.request({
      url: "http://120.53.84.25:8001/api/v1/faculty/list",
      method: "get",
      dataType: "json",
      success: (res2) => {
        this.jsonData = res2.data.data;
      },
      fail: (err) => {
        console.log(res.data);
      }
    });
  }
};
if (!Array) {
  const _component_fui_col = common_vendor.resolveComponent("fui-col");
  const _component_fui_row = common_vendor.resolveComponent("fui-row");
  (_component_fui_col + _component_fui_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.value,
    b: common_vendor.o(($event) => $data.value = $event.detail.value),
    c: common_vendor.t($data.sign),
    d: common_vendor.o((...args) => $options.changeHandle && $options.changeHandle(...args)),
    e: $data.show
  }, $data.show ? {
    f: common_vendor.f($data.jsonData, (teacher, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.handleDetail(index), index),
        b: teacher.avatar,
        c: common_vendor.t(teacher.name),
        d: common_vendor.t(teacher.foreignName),
        e: common_vendor.o(($event) => $options.handleDetail(index), index),
        f: index,
        g: "d8a56784-1-" + i0 + ",d8a56784-0"
      };
    }),
    g: common_vendor.p({
      span: 12
    }),
    h: common_vendor.p({
      ["margin-bottom"]: "24rpx",
      gutter: "16"
    })
  } : {}, {
    i: !$data.show
  }, !$data.show ? common_vendor.e({
    j: $data.detailData.id == $data.pictureId + 1
  }, $data.detailData.id == $data.pictureId + 1 ? {
    k: $data.detailData.avatar,
    l: common_vendor.t($data.detailData.name),
    m: common_vendor.t($data.detailData.foreignName),
    n: common_vendor.o(($event) => $options.handleDetail(_ctx.index)),
    o: common_vendor.p({
      span: 12
    }),
    p: common_vendor.p({
      ["margin-bottom"]: "24rpx",
      gutter: "16"
    }),
    q: common_vendor.f($data.detailData.department, (Department, index, i0) => {
      return {
        a: common_vendor.t(Department)
      };
    }),
    r: common_vendor.f($data.detailData.title, (Title, index, i0) => {
      return common_vendor.e({
        a: Title != "否"
      }, Title != "否" ? {
        b: common_vendor.t(Title)
      } : {});
    }),
    s: common_vendor.t($data.detailData.positions),
    t: common_vendor.t($data.detailData.officeLocation),
    v: common_vendor.t($data.detailData.officePhoneNumber),
    w: common_vendor.t($data.detailData.email),
    x: common_vendor.t($data.detailData.undergraduateCourses),
    y: common_vendor.t($data.detailData.graduateCourses),
    z: common_vendor.t($data.detailData.researchDirections),
    A: common_vendor.t($data.detailData.partTimeJobs),
    B: common_vendor.t($data.detailData.resume),
    C: common_vendor.f($data.detailData.performance, (Prformance, index, i0) => {
      return {};
    }),
    D: common_vendor.t(_ctx.Performance),
    E: common_vendor.f($data.detailData.rewards, (Rewards, index, i0) => {
      return {
        a: common_vendor.t(Rewards)
      };
    })
  } : {}) : {}, {
    F: !$data.show
  }, !$data.show ? {
    G: common_vendor.f($data.jsonData, (teacher, index, i0) => {
      return common_vendor.e({
        a: teacher.name == $data.valueInput
      }, teacher.name == $data.valueInput ? {
        b: $data.detailData.avatar,
        c: common_vendor.t($data.detailData.name),
        d: common_vendor.t($data.detailData.foreignName),
        e: common_vendor.o(($event) => $options.handleDetail(index)),
        f: "d8a56784-5-" + i0 + "," + ("d8a56784-4-" + i0),
        g: common_vendor.p({
          span: 12
        }),
        h: "d8a56784-4-" + i0,
        i: common_vendor.p({
          ["margin-bottom"]: "24rpx",
          gutter: "16"
        }),
        j: common_vendor.f($data.detailData.department, (Department, index2, i1) => {
          return {
            a: common_vendor.t(Department)
          };
        }),
        k: common_vendor.f($data.detailData.title, (Title, index2, i1) => {
          return common_vendor.e({
            a: Title != "否"
          }, Title != "否" ? {
            b: common_vendor.t(Title)
          } : {});
        }),
        l: common_vendor.t($data.detailData.positions),
        m: common_vendor.t($data.detailData.officeLocation),
        n: common_vendor.t($data.detailData.officePhoneNumber),
        o: common_vendor.t($data.detailData.email),
        p: common_vendor.t($data.detailData.undergraduateCourses),
        q: common_vendor.t($data.detailData.graduateCourses),
        r: common_vendor.t($data.detailData.researchDirections),
        s: common_vendor.t($data.detailData.partTimeJobs),
        t: common_vendor.t($data.detailData.resume),
        v: common_vendor.f($data.detailData.performance, (Prformance, index2, i1) => {
          return {};
        }),
        w: common_vendor.t(_ctx.Performance),
        x: common_vendor.f($data.detailData.rewards, (Rewards, index2, i1) => {
          return {
            a: common_vendor.t(Rewards)
          };
        })
      } : {});
    })
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/hBuilder/more/ustb-scce-profile-main-new/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
