// zustend ka state

import  {create} from 'zustand'
import { createJSONStorage } from 'zustand/middleware';
import { persist } from 'zustand/middleware';
import { mmkvStorage } from './storage';

interface UserStore{
     user:any;
     setUser:(data:any) => void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set,get) => ({
            user: null,
            setUser: (data)=> set({ user: data })
        }),
        {
          name:'user-storage',
          storage:createJSONStorage(()=> mmkvStorage)
        }
    )
)

