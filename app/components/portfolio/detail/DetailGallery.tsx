export default function DetailGallery() {
    return (
        <div className="w-full max-w-7xl px-6 lg:px-20 py-16 mx-auto">
            <h2 className="text-2xl font-bold text-text-main mb-8 text-left">
                Galeri Proyek
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-3/4 group cursor-pointer bg-gray-100">
                    <div
                        className="w-full h-full bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClsHvm_at429ZOxsH55OOaexMG74ZkEvut_Jk_-BQ0cmwyL6cBTznoUCcwt3AclFx-yIrWfy4nXESKu2ofmzrHeuga445DZ5OsTsngtdlqoziE0aEOHP9U9eY9kRTvjB8TgjjwQrrPFwjgK2nmAJkDr-okoU3q5VFGVlelb9vRMMwt7bq59SS_JiMNBT3NCvZpmFoMPf1OW0atInvvSbzVWYatYcpwfNzJcpH-QSUSJWZwwAV9shOAf8h9sopN4Lr2tMQyUY2pRw')",
                        }}
                    ></div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-3/4 group cursor-pointer bg-gray-100">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBk-xohcHTVIrp8dJHL7_rKdFwsBEYLYD8JmakuMPbn168SI2-SQ6LVOPpU0ID5SsC3Ce_3X3xGXm6fieE_YKuyrDXfiHmkvdXSdqARzOGJAynW4LepyVnlUudbHsCdGP1c_IGSywuF-1r39mBDfzfJJZSAF_HpWKrJBaFZlHTZzmZm4G_LCEuzoeDyUu4MjKkBaOtQMFx3OoX0FYhuPokrabkEcDTTLKZwaqMGcR0n7ALvYwcmG32V83A1zxd6N34T2GZUelRMRA')",
                        }}
                    ></div>
                </div>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-3/4 group cursor-pointer bg-gray-100 md:col-span-2 lg:col-span-1">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                            backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSDk4R27pBrkTLoEWNarTg2SvGl5DyBPZ0rDoDnv7RLPCkHsHa0NU2UoqPHydLBho5OkQmdjJsuQCunrBjROg9h-JEueFwEh-Y9aOH1SXxsug1UG52Azkwzmom_LbJsLjJ0Ko3YMKNpv0M9P94BC5XtUpr4KAkORJds2bxiS58VDdvvvboN3WBokhFQel5Yx2ipuxbadZBNOKAmdApOkqJeyAiufLhAe4R27UEiTXsrjDrTbCccCckK3SPU9JPqoul4tylOIFZKQ')",
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
