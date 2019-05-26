<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="contain">
            <el-row >
                <el-col :span="8">
                    <el-row style="height:44%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{sitegroupTitle}}</p>
                                <el-table class="table" :data="tableData" stripe style="width: 80%;margin:0 auto;">
                                    <el-table-column prop="name" label="名称" style="width:100%"></el-table-column>
                                    <el-table-column prop="type" label="类型" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(sitegroupTitle,'名称','类型')">新增</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
                        </el-col>
                    </el-row>
                    <el-row style="height:44%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{siteTitle}}</p>
                                <el-table class="table" :data="tableData1" stripe style="width: 40%;margin:0 auto;">
                                    <el-table-column prop="groupName" label="站点名" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(siteTitle,'站点名')">添加</el-button></div>
                            <div><el-button>移除</el-button></div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="16" class="rightContain">
                    <div style="border:1px solid #666;height:100%">
                        <div class="grid-content AGVinfo">
                            img图片
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
                   name:"充电点集群",
                   type:"充电点"
               },{
                   name:"休息点集群",
                   type:"休息点"
               },{
                   name:"NG料点集群1",
                   type:"NG点"
               },{
                   name:"......",
                   type:"......"
               }],
               tableData1: [{
                    groupName:'P1'
               },{
                    groupName:'P2'
               },{
                    groupName:'P3'
               }],
                dialogFormVisible:false,
                sitegroupTitle:'站点群',
                siteTitle:'',
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
