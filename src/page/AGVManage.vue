<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="contain">
            <el-row >
                <el-col :span="8">
                    <el-row style="height:44%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{title}}</p>
                                <el-table class="table" :data="tableData" stripe style="width: 70%;margin:0 auto;">
                                    <el-table-column prop="group" label="group" style="width:100%"></el-table-column>
                                    <el-table-column prop="type" label="类型" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(title,'group','类型')">新增</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
                        </el-col>
                    </el-row>
                    <el-row style="height:44%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>AGV</p>
                                <el-table class="table" :data="tableData1" stripe style="width: 70%;margin:0 auto;">
                                    <el-table-column prop="AGV" label="AGV" style="width:100%"></el-table-column>
                                    <el-table-column prop="ip" label="IP" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button>切换</el-button></div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="16" class="rightContain">
                    <div style="border:1px solid #666;height:100%">
                        <div class="grid-content AGVinfo">
                            <h2>AGV信息</h2>
                            <div class="infoDetial">
                                <div class="flex">
                                    <span class="flexWrap">SN：</span>
                                    <span class="flexWrap">PKEK_AGV_001</span>
                                </div>
                                <div class="flex">
                                    <span class="flexWrap">名称：</span>
                                    <span class="flexWrap">SMAGV2</span>
                                </div>
                                <div class="flex">
                                    <span class="flexWrap">IP：</span>
                                    <span class="flexWrap">192.168.10.111</span>
                                </div>
                                <div class="flex">
                                    <span class="flexWrap">型号：</span>
                                    <span class="flexWrap">小车</span>
                                </div>
                                <div class="flex">
                                    <span class="flexWrap">最大速度：</span>
                                    <span class="flexWrap">1.5  m/s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div>
            <vdialog v-show="dialogFormVisible" :dialogFormVisible="dialogFormVisible" :addTitle="addTitle" :name1="name1" :name2="name2" v-on:closeDialog="closeDialog"></vdialog>
            <!-- <el-dialog title="新增AGVGroup" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="group" :label-width="formLabelWidth">
                        <el-input v-model="form.group" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-input v-model="form.type" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
            </el-dialog> -->
        </div>

    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import vdialog from '../components/dialog'
    
    export default {
        data(){
            return {
               tableData: [{
                   group:"未启用",
                   type:"--"
               },{
                   group:"big",
                   type:"标准大车"
               },{
                   group:"small",
                   type:"小车"
               }],
               tableData1: [{
                   AGV:"AGV1",
                   ip:"192.168.10.110"
               },{
                   AGV:"SMAGV2",
                   ip:"192.168.10.111"
               },{
                  AGV:"BGAGV3",
                   ip:"192.168.10.112"
               }],
                dialogFormVisible:false,
                title:'AGVgroup',
                addTitle:'',
                name1:'',
                name2:'',
            }
           
        },
    	components: {
            headTop,
            vdialog
    	},
        created(){
        },
        methods: {
           popDialog(title,name1,name2){
                this.$store.commit("dialogCtrol")
                this.dialogFormVisible=this.$store.state.dialogFormVisible;
                this.addTitle=title;
                this.name1=name1;
                this.name2=name2;
            },
            closeDialog(){
                 this.dialogFormVisible=this.$store.state.dialogFormVisible;
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    
</style>
