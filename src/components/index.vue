<template>
  <div class="lincenseScopeBox">
      <div class="lincenseScopeCont">
        <h2>三级复选框的功能：使用vue + element-ui组件</h2>
        <p>
          左边复选框可全选右边的二级复选框，默认二级复选框选中一定要选择三级，则默认选择第一个三级的选项；
        </p>
        <p>
          三级选项存在单选，多选，输入框
        </p>
        <table>
          <tr v-for="(item,index) in licenseScopeB">
            <!-- 左边选项 一类-->
            <td class="lincenseScopeL">

                <Checkbox
              :value="item.checkAll"
              :key="item.code"
              @click.prevent.native="checkAllChange(item.code, index)">{{item.value}}</Checkbox>

            </td>
            <!-- 右边选项 -->
            <td class="lincenseScopeR">
              <template  v-for="(itemC,indexC) in item.rows">
                <!-- 二类 -->
                <Checkbox :class="['lincenseScopeRc', {'lincenseScopeDis': itemC.rows && !itemC.hasInput}]" :key="itemC.code" :label="itemC.code"  v-model="itemC.isChecked" :value="itemC.isChecked" @on-change.self="checkAllGroupChange(item.checkedGroup, item.code, index, indexC)">
                      {{itemC.value}}
                    </Checkbox>

                  <!-- 三类 -->
                  <template v-if="itemC.rows">
                    <!-- 单选 -->
                      <span class="lincenseScopeRg" v-if="itemC.checkOne">
                        <RadioGroup v-model="itemC.checked" @on-change="radioChange(itemC, $event, item.checkedGroup, item.code, index, indexC)">
                            <p class="threeTips">{{itemC.text}}</p>
                            <div class="threeItemB">
                              <radio v-for="itemG in itemC.rows" :key="itemG.code" :label="itemG.code">{{itemG.value}}</radio>
                            </div>
                        </RadioGroup>
                      </span>
                      <!-- 其他（输入框） -->
                      <span class="lincenseScopeRg" v-else-if="!itemC.checkOne && itemC.hasInput" style="padding: 0 4px">
                        <Input @on-blur="radioChange(itemC, otherBussinessType, item.checkedGroup, item.code, index, indexC)" ref="otherBussiness" v-model.trim="otherBussinessType" placeholder="请输入详细类别"></Input>
                      </span>
                      <!-- 复选框 -->
                      <span class="lincenseScopeRg" v-else>
                        <CheckboxGroup v-model="itemC.checkedGroup" @on-change="radioChange(itemC, $event, item.checkedGroup, item.code, index, indexC)">

                          <p class="threeTips">{{itemC.text}}</p>
                          <div class="threeItemB">
                            <Checkbox v-for="(itemG,indexG) in itemC.rows" :key="itemG.code" :label="itemG.code">{{itemG.value}}</Checkbox>
                          </div>

                        </CheckboxGroup>
                      </span>
                  </template>
                </template>
              </td>
            </tr>
          </table>
          <Button @click="getLincenseScope" style="margin-bottom: 10px;">获取选中的值</Button>
          <p v-text="licenseScope"></p>
      </div>
  </div>
</template>

<script>
import { licenseScope } from "./json";
export default {
  data () {
    return {
      licenseScope: '',  //最终的值
      licenseScopeB: '', //通过深复制获取json数据
      otherBussinessType: '',  //其他类型---来自输入框
    }
  },
  mounted() {
    this.licenseScopeB = JSON.parse(JSON.stringify(licenseScope));  //深复制之后操作
  },
  methods: {
      checkAllChange(val, index) {  //单击左侧可全选
        this.licenseScopeB.forEach((item) => {
          if (val == item.code) {
            item.checkAll = !item.checkAll;
            if (item.checkAll && item.rows) {
              item.rows.forEach((cItem) => {
                item.checkedGroup.push(cItem.code);
                cItem.isChecked = true;
                if(cItem.rows){
                  if(!cItem.checkOne)  cItem.checkedGroup.push(cItem.rows[0].code)
                  else cItem.checked = cItem.rows[0].code
                }
              })
              // console.log(item)
            } else {
              item.rows.forEach((cItem,index) => {
                if(cItem.rows){
                  if(!cItem.checkOne) cItem.checkedGroup = [];
                  else cItem.checked = '';
                }
                item.checkedGroup.splice(index, 1);
                cItem.isChecked = false;
              })
              item.checkedGroup = [];
            }
          }
        })
      },
      checkAllGroupChange(checkVal, code, index, indexC, role) {  //单击右侧第一级
        let business = this.licenseScopeB[index];

        (business.rows).forEach((item, index) => {
          if (item.isChecked){
            let isExit = checkVal.find((cItem) => item.code === cItem)
            if(!isExit) {   //当前选择的值不存在，则增加进去
              checkVal.push(item.code)
              
              if(business.rows[indexC].rows){
                if(!role && !business.rows[indexC].hasInput) {   //点击三级触发此方法时候无需自动选择第一个类型
                  if(business.rows[indexC].checkOne) {
                    business.rows[indexC].checked = business.rows[indexC].rows[0].code;
                  }
                  business.rows[indexC].checkedGroup.push(business.rows[indexC].rows[0].code)
                }else if(business.rows[indexC].hasInput){
                  business.rows[indexC].checkedGroup.push(business.rows[indexC].rows[0].code)
                }
              }
            }
          }else{ 
            //不存在选中状态时，清掉左侧选中的状态
            checkVal.find((cItem, index) => {
              if(item.code === cItem) {
                if(business.rows[indexC].checkOne){
                  business.rows[indexC].checked = '';
                }
                business.rows[indexC].checkedGroup = []
                checkVal.splice(index, 1)
              }
            })
          }
        })
        console.log(checkVal)
        
        if (checkVal.length == 0) {  //当前勾选的值为空取消左一大类的勾选
          this.licenseScopeB[index].checkAll = false;
        } else {
          
          this.licenseScopeB[index].checkAll = true;
        }
      },
      radioChange(pitem, sitem, checkAllGroup, code, index, indexC) {
        console.log('--------------')
        console.log(pitem)
        console.log(sitem)
        if(sitem.length > 0){
          pitem.isChecked = true;
          this.checkAllGroupChange(checkAllGroup, code, index, indexC, 'role');  //调用方法实现点击三级影响一级的变化
        }else{
          // if(pitem.isChecked)   //没有输入框没有值也可以勾选
          if(!pitem.hasInput){
            pitem.isChecked = false;
          }
          this.checkAllGroupChange(checkAllGroup, code, index, indexC, 'role');
        }
        if (pitem.checkOne){  //单选
          pitem.checkedGroup = [];
          pitem.rows.forEach((item, index) => {
            if (item.code === sitem) pitem.checkedGroup.push(item.code);
          })
          return;
        }
        if (pitem.hasInput){  //输入框
          let isExit = pitem.checkedGroup.find((item, index) => item === sitem);

          let len = pitem.checkedGroup.length;    //pitem.checkedGroup===['EDA', '其他输入的值']
          if(len > 1){   //用于修改的时候，长度大于2，此时应该将其去掉自己输入之前输入的值再重新push进去
            pitem.checkedGroup.splice(len-1, 1);
          }
          isExit ? '' : pitem.checkedGroup.push(sitem);
          this.getLincenseScope();    //修改情况下，操作的是输入框，需获取值来取消必填的提示
          // pitem.checkedGroup.push(sitem);
          return;
        }
      },
      getLincenseScope(){  //获取最终的值
        this.licenseScope = [];
        console.log(this.licenseScopeB);
        let checkVal = [];
        this.licenseScopeB.forEach((item)=>{
          if(item.checkAll && !checkVal.includes(item.code)){
            checkVal.push(item.code);

            if(item.checkedGroup && item.checkedGroup.length>0){
              for(let i = 0; i< item.checkedGroup.length; i++){
                checkVal.push(item.checkedGroup[i])
              }
              item.rows.forEach((cItem)=>{

                if(cItem.checkedGroup && cItem.checkedGroup.length>0){
                  for(let i = 0; i< cItem.checkedGroup.length; i++){

                    if(cItem.checkedGroup[i] == '') return  //针对输入框的值为空的情况下不增加
                    checkVal.push(cItem.checkedGroup[i])
                  }
                }
              })
            }
          }
        })
        console.log('修改后的')
        console.log(checkVal)

        if(!checkVal.includes('ED')){  //选择的值不存在其他类型，则清空输入框的值
          this.otherBussinessType = '';
        }
        
        checkVal.forEach((item)=>{
          let obj = {code: item};
          this.licenseScope.push(obj)
        })
        console.log(this.licenseScope)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">
@color: #333;
@text-color-content: #666;
@text-size-14: 14px;
@text-size-12: 12px;
@border-color: #ddd;

.lincenseScopeBox {
    width: 100%;
    color: @color;
    text-align: left;
    .lincenseScopeCont {
      width: 938px;
      margin: 0 auto 20px;
      h2 {
        margin-bottom: 10px;
      }
      table {
        margin: 10px 0;
        border: 1px solid @border-color;
        border-collapse: collapse;
        tr:nth-child(2) .lincenseScopeR .lincenseScopeRc:first-child {
          display: block;
        }
      }
      .ivu-checkbox-wrapper {
        font-size: @text-size-14;
      }
      .businessScopeSelect {
        width: 250px;
        vertical-align: top;
        .ivu-select-selection {
          height: auto;
          min-height: 42px;
          border: 1px solid @border-color
        }
      }
    }
  }
  .lincenseScopeL {
    width: 137px;
    padding: 22px 20px;
    border-right: 1px solid @border-color;
    border-bottom: 1px solid @border-color;
    vertical-align: top;
  }
  .lincenseScopeR {
    width: 800px;
    padding: 22px 20px;
    border-bottom: 1px solid @border-color;
    .lincenseScopeDis {
      // display: block;
    }
    .lincenseScopeRc {
      padding: 0 20px;
      margin-bottom: 10px;
      vertical-align: top;
    }
    .lincenseScopeRg {
      display: inline-block;
      margin-bottom: 20px;
      padding: 0 20px;
      font-size: @text-size-12;
      color: @text-color-content;
      .ivu-checkbox-wrapper {
        padding-right: 30px;
        font-size: @text-size-12;
      }
      .ivu-radio-wrapper {
        margin-right: 30px;
      }
      .ivu-input {
        width: 200px;
        height: 36px !important;
      }
      .threeItemB {
        display: inline-block;
        vertical-align: top;
        width: 450px;
      }
      .threeTips {
        display: inline-block;
        font-size: @text-size-12;
      }
    }
  }

</style>
