<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="contain">
            <el-row >
                <el-col :span="7" style="height:90%;" class="tableContain pt-20">
                    <el-row style="height:auto;">
                        <el-col :span="12">
                            <el-button>新增站点</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button>添加线路</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="height:auto;">
                        <el-col :span="12">
                            <el-button>添加弧线</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button>新增转入点</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="height:auto;">
                        <el-col :span="12">
                            <el-button>添加参考线</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button>添加中垂线</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="height:auto;">
                        <el-col :span="12">
                            <el-button>清空参考线</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button>删除对象</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="16" class="rightContain">
                    <div style="border:1px solid #666;height:100%">
                        <div class="grid-content AGVinfo">
                            img图片
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import vdialog from '../components/dialog'
    
    export default {
        data(){
            return {

            }
           
        },
    	components: {
            headTop
    	},
        created(){
        },
        methods: {
           
        },
    }
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .el-button{
        width: 65%;
    }
    
</style>
