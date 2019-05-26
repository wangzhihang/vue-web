<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="contain">
            <el-row >
                <el-col :span="8" style="height:90%;">
                    <el-row style="height:32%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{callStation}}</p>
                                <el-table class="table" :data="tableData" stripe style="width: 96%;margin:0 auto;">
                                    <el-table-column prop="name" label="名称" style="width:100%"></el-table-column>
                                    <el-table-column prop="macAdd" label="MAC地址" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(callStation,'名称','MAC地址')">新增</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
                        </el-col>
                    </el-row>
                    <el-row style="height:32%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{butText}}</p>
                                <el-table class="table" :data="tableData1" stripe style="width: 70%;margin:0 auto;">
                                    <el-table-column prop="num" label="编号" style="width:100%"></el-table-column>
                                    <el-table-column prop="name" label="名称" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(butText,'编号','名称')">新增</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
                        </el-col>
                    </el-row>
                    <el-row style="height:32%;">
                        <el-col :span="16" class="tableContain">
                            <template>
                                <p>{{taskFlow}}</p>
                                <el-table class="table" :data="tableData2" stripe style="width: 96%;margin:0 auto;">
                                    <el-table-column prop="id" label="step_id" style="width:100%"></el-table-column>
                                    <el-table-column prop="action" label="动作" style="width:100%"></el-table-column>
                                    <el-table-column prop="agvGroup" label="agvGroup" style="width:100%"></el-table-column>
                                    <el-table-column prop="point" label="point" style="width:100%"></el-table-column>
                                </el-table>
                            </template>
                        </el-col>
                        <el-col :span="8" class="txtCenter operateBtn">
                            <div><el-button @click="popDialog(taskFlow,'step_id','动作','agvGroup','point')">新增</el-button></div>
                            <div><el-button>修改</el-button></div>
                            <div><el-button>删除</el-button></div>
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
            <vdialog v-show="dialogFormVisible" :dialogFormVisible="dialogFormVisible" :addTitle="addTitle" :name1="name1" :name2="name2" :name3="name3" :name4="name4" v-on:closeDialog="closeDialog"></vdialog>
            <!-- <dialog v-show="dialogFormVisible"></dialog> -->
            <!-- <el-dialog title="新增AGVGroup" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="group" :label-width="formLabelWidth">
                        <el-input v-model="input.group" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-input v-model="input.type" autocomplete="off"></el-input>
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
                   name:"上料点",
                   macAdd:"1234567890123456"
               },{
                   name:"立库出口1",
                   macAdd:"B234567890123456"
               },{
                    name:"机械臂",
                   macAdd:"A234567890123456"
               }],
               tableData1: [{
                   num:"1",
                   name:"取货"
               },{
                   num:"2",
                   name:"卸货"
               },{
                    num:"3",
                   name:"空料架回收"
               }],
                tableData2: [{
                   id:1,
                   action:'取货',
                   agvGroup:'big',
                   point:'P6'
               },{
                    id:2,
                    action:'卸货',
                    agvGroup:'big',
                    point:'P10'
               },{
                    id:3,
                    action:'充电',
                    agvGroup:'big',
                    point:'group1'
               }],
                dialogFormVisible:false,
                callStation:'呼叫站',
                butText:'按钮',
                taskFlow:'任务流',
                addTitle:'',
                name1:'',
                name2:'',
                name3:'',
                name4:''
            }
           
        },
    	components: {
            headTop,
            vdialog
    	},
        created(){
            console.log(this.$store.state.dialogFormVisible)
        },
        methods: {
            popDialog(title,name1,name2,name3,name4){
                this.$store.commit("dialogCtrol")
                this.dialogFormVisible=this.$store.state.dialogFormVisible;
                this.addTitle=title;
                this.name1=name1;
                this.name2=name2;
                this.name3=name3;
                this.name4=name4;
            },
            closeDialog(){
                this.dialogFormVisible=this.$store.state.dialogFormVisible;
            }
        },
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .el-table .cell{
        padding: 0!important;
    }
</style>
